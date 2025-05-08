import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckIcon, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  buildPurpose: z.array(z.string()).min(1, { message: "Please select at least one build purpose" })
});

type FormValues = z.infer<typeof formSchema>;

const purposes = [
  { value: "gaming", label: "Gaming" },
  { value: "work", label: "Work/Office" },
  { value: "content-creation", label: "Content Creation" },
  { value: "streaming", label: "Streaming" },
  { value: "general", label: "General Use" },
  { value: "other", label: "Other" },
];

const ContactForm = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      buildPurpose: [],
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default",
      });
      setSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: FormValues) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-dark font-medium">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-dark font-medium">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="your.email@example.com" 
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-dark font-medium">Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg border">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="build-review">Build Review</SelectItem>
                  <SelectItem value="component-question">Component Question</SelectItem>
                  <SelectItem value="compatibility">Compatibility Check</SelectItem>
                  <SelectItem value="suggestions">Build Suggestions</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-dark font-medium">Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe your build or questions..." 
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" 
                  rows={5} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="buildPurpose"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-neutral-dark font-medium">Build Purpose</FormLabel>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {purposes.map((purpose) => (
                  <FormField
                    key={purpose.value}
                    control={form.control}
                    name="buildPurpose"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={purpose.value}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(purpose.value)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, purpose.value])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== purpose.value
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {purpose.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className={`w-full ${submitted ? 'bg-success' : 'bg-primary'} hover:${submitted ? 'bg-success/90' : 'bg-primary/90'} text-white font-semibold px-6 py-6 rounded-lg shadow-md transition-all`}
          disabled={isPending || submitted}
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : submitted ? (
            <>
              <CheckIcon className="mr-2 h-4 w-4" />
              Message Sent!
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

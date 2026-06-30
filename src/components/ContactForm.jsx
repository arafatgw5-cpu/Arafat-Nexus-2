"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import SuccessMsg from "./SuccessMsg";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
    Service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      Service: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast({
        title: "Error: Something is wrong",
        description: "Please input your name and email to continue",
        variant: "destructive",
      });
      return;
    }
    // ... আপনার বাকি logic এখানে থাকবে
    setSuccess(true);
    setLoading(false);
  };

  return (
    <form className="space-y-4">
      <h3 className="text-2xl font-bold text-[var(--color-primary)] md:text-4xl">
        Let&apos;s work together
      </h3>
      <p className="text-sm text-[var(--color-muted)] md:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit
        vel saepe fugiat ex aperiam, totam quae et tenetur deleniti.
      </p>
      
      {success ? (
        <SuccessMsg status={status} />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input name="Name" placeholder="Your name" value={formData.Name} onChange={handleChange} />
            <Input name="Email" placeholder="Email address" value={formData.Email} onChange={handleChange} />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Input name="Phone" placeholder="Phone number" value={formData.Phone} onChange={handleChange} />
            <Input name="Address" placeholder="Address" value={formData.Address} onChange={handleChange} />
          </div>
          <Textarea name="Message" placeholder="Text here" value={formData.Message} onChange={handleChange} rows={5} />
          
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="border-[var(--color-border)] bg-[var(--color-surface)]">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
              <SelectGroup>
                <SelectLabel className="text-[var(--color-muted)]">Select a service</SelectLabel>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="ux">UI/UX Design</SelectItem>
                <SelectItem value="logo">Logo Design</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            disabled={isLoading}
            onClick={handleSubmit}
            className="w-full py-6 bg-[var(--color-primary)]/10 text-[var(--color-text)] border border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/20 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            {isLoading ? "Submitting..." : "Send Message"}
          </Button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
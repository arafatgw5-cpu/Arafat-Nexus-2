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
<<<<<<< HEAD

=======
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
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
<<<<<<< HEAD
=======

>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
    if (!formData.Name.trim() || !formData.Email.trim()) {
      toast({
        title: "Error: Something is wrong",
        description: "Please input your name and email to continue",
        variant: "destructive",
      });
      return;
    }
<<<<<<< HEAD
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
=======
    const form = new FormData();
    const currentDateTime = new Date().toLocaleString();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Phone", formData.Phone);
    form.append("Address", formData.Address);
    form.append("Message", formData.Message);
    form.append("Service", formData.Service);
    form.append("DateTime", currentDateTime);

    try {
      setLoading(true);
      toast({
        title: "Message sending limit is finished",
        description:
          "You have finished 50/50 message sent limit from getform. Please enable pro mode to continue",
      });
      const response = await fetch("", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSuccess(true);
        setStatus("Success! Your message has been sent.");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
          Service: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
      }
    } catch (error) {
      console.error("Error!", error);
      setStatus("Error! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="space-y-4">
      <h3 className="text-2xl md:text-4xl text-lightSky">
        Let&apos;s work together
      </h3>
      <p className="text-white/60 text-sm md:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil velit
        vel saepe fugiat ex aperiam, totam quae et tenetur deleniti.
      </p>
      <>
        {success ? (
          <SuccessMsg status={status} />
        ) : (
          <>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Input
                  type="text"
                  id="Name"
                  name="Name"
                  required
                  placeholder="Your name"
                  value={formData.Name}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  id="Email"
                  name="Email"
                  required
                  placeholder="Email address"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Input
                  type="text"
                  id="Phone"
                  name="Phone"
                  placeholder="Phone number"
                  value={formData.Phone}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  id="Address"
                  name="Address"
                  placeholder="Address"
                  value={formData.Address}
                  onChange={handleChange}
                />
              </div>

              <Textarea
                name="Message"
                placeholder="Text here"
                value={formData.Message}
                onChange={handleChange}
                rows={5}
              />
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-bodyColor text-white border-white/20">
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button
              disabled={isLoading}
              onClick={handleSubmit}
              type="submit"
              className="w-full py-4 bg-lightSky/5 text-white/80 border border-lightSky/20 hover:bg-lightSky/10 hover:border-lightSky hover:text-hoverColor hoverEffect"
            >
              {isLoading ? "Submitting message..." : "Send Message"}
            </Button>
          </>
        )}
      </>
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972
    </form>
  );
};

<<<<<<< HEAD
export default ContactForm;
=======
export default ContactForm;
>>>>>>> 5ecbec057e38bb4142a7f973d49e609781513972

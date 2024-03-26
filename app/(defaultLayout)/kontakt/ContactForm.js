"use client";
import { useForm } from '@mantine/form';
import { Button, TextInput, Textarea, Box, Notification } from '@mantine/core';
import { useState } from 'react';
import SectionHeader from 'app/components/Universal/SectionHeader';

export default function ContactForm({device}) {
  // State to manage submission feedback
  const [submissionStatus, setSubmissionStatus] = useState({ submitted: false, error: false });

  // Initialize form with useForm hook
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },

    // Add form validation if required
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  // Function to handle form submission
  const handleSubmit = async (values) => {
    try {
      const response = await fetch('/api/contactUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      console.log(await response.body);
      if (response.ok) {
        setSubmissionStatus({ submitted: true, error: false });
        form.reset(); // Reset form on successful submission
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmissionStatus({ submitted: true, error: true });
    }
  };

 if(device == "m"){
  return (
    <section>
    <SectionHeader mainText={"Kontaktujte nás"} subtitle={"Napište nám"}></SectionHeader>
    {submissionStatus.submitted && (
        <Notification color={submissionStatus.error ? 'red' : 'teal'} mt="md">
          {submissionStatus.error ? 'Zprávu se nepodařilo odeslat, zkuste to prosím poději.' : 'Zpráva byla úspěšně odeslána!'}
        </Notification>
      )}
      <form onSubmit={form.onSubmit(handleSubmit)} style={{marginTop: "2vh"}}>
        <div style={{ display: "flex", gap: "2vh", flexDirection: "column"}}>
         <div style={{display: "flex", width: "100%", gap: "1vw", flexDirection: "column"}}>
         <TextInput
            required
            label="Jméno"
            placeholder="Vaše jméno"
            w={"100%"}
            {...form.getInputProps('name')}
          />
          <TextInput
            required
            label="Mail"
            placeholder="Váš email"
            w={"100%"}
            {...form.getInputProps('email')}
          />
         </div>
   
         <Textarea
          styles={{
            input: {
                minHeight: "20vh"
                
            }
          }}
          
            required
            label="Zpráva"
            placeholder="Vaše zpráva"
            minRows={20}
            {...form.getInputProps('message')}
          />
         
          <Button type="submit" w={"100%"} mt="md" size='lg' style={{backgroundColor: "#77EB00", color: "#254702"}}>
            Odeslat zprávu
          </Button>
        </div>
      </form>
    
    </section>
  );
 } else{
  return (
    <section>
    <SectionHeader mainText={"Kontaktujte nás"} subtitle={"Napište nám"}></SectionHeader>
    {submissionStatus.submitted && (
        <Notification color={submissionStatus.error ? 'red' : 'teal'} mt="md">
          {submissionStatus.error ? 'Zprávu se nepodařilo odeslat, zkuste to prosím poději.' : 'Zpráva byla úspěšně odeslána!'}
        </Notification>
      )}
      <form onSubmit={form.onSubmit(handleSubmit)} style={{marginTop: "2vh"}}>
        <div style={{maxWidth: "60%", display: "flex", gap: "2vh", flexDirection: "column"}}>
         <div style={{display: "flex", width: "100%", gap: "1vw"}}>
         <TextInput
            required
            label="Jméno"
            placeholder="Vaše jméno"
            w={"100%"}
            {...form.getInputProps('name')}
          />
          <TextInput
            required
            label="Mail"
            placeholder="Váš email"
            w={"100%"}
            {...form.getInputProps('email')}
          />
         </div>
   
         <Textarea
          styles={{
            input: {
                minHeight: "20vh"
                
            }
          }}
          
            required
            label="Zpráva"
            placeholder="Vaše zpráva"
            minRows={20}
            {...form.getInputProps('message')}
          />
         
          <Button type="submit" w={"40%"} mt="md" size='lg' style={{backgroundColor: "#77EB00", color: "#254702"}}>
            Odeslat zprávu
          </Button>
        </div>
      </form>
    
    </section>
  );
 }
}

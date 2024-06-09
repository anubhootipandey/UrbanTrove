import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  const faqData = [
    {
      question: "What is the return policy?",
      answer: "Our return policy allows you to return products within 30 days of purchase. Please ensure the items are in their original condition."
    },
    {
      question: "How do I track my order?",
      answer: "You can track your order using the tracking number provided in your confirmation email. Visit our order tracking page and enter your tracking number."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support via email at support@ecommerce.com or call us at (123) 456-7890. Our support team is available 24/7."
    }
  ];

  return (
    <Box sx={{ padding: 3, marginTop: "10px" }}>
      <Typography variant="h4" sx={{ padding: 3, marginTop: "10px" }} gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion key={index} sx={{ marginBottom: 2,  background: '#EEEEFF' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;

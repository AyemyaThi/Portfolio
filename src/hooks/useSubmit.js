import {useState} from "react";
import { usePortfolio } from "./usePortfolio"; // Import the hook and provider

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const apiKey = process.env.DEMO_BREVO_API_KEY;
/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const { email } = usePortfolio();
  console.log('email', email)

  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    //const random = Math.random();
    setLoading(true);
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify({
          sender: { email: email },
          to: [{ email }],
          subject: "Demo Email From Portfolio",
          textContent: `Email Type: ${data.type}. Comment: ${data.comment}`,
        }),
      });
      //return response.ok;
      console.log('response.ok::', response.ok)

      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })

    } catch (error) {
      console.log('response.error::', error)

      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;

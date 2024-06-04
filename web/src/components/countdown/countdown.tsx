import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CountdownCard from "./countdownCard/countdownCard";

export type CountdownProps = {
  date: Date;
};

export default function Countdown(props: CountdownProps) {
  const [days, hours, minutes, seconds] = useCountdown(props.date);
  return (
    <Stack direction={"row"} align={"center"} justify={"center"}>
      <CountdownCard number={days} label={"Dias"}></CountdownCard>
      <CountdownCard number={hours} label={"Horas"}></CountdownCard>
      <CountdownCard number={minutes} label={"Minutos"}></CountdownCard>
      <CountdownCard number={seconds} label={"Segundos"}></CountdownCard>
    </Stack>
  );
}

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  if (countDown <= 0) {
    return [0, 0, 0, 0];
  }
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

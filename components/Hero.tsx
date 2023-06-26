"use client"


import { Card, Metric, Text } from "@tremor/react";

const Hero = () => {
  return (
    <div>
      <Card className="max-w-xs mx-auto">
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>{" "}
    </div>
  );
};

export default Hero;

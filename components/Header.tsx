"use client";

import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from "./CityPicker";

const Header = () => {
  return (
    <div>
      <Card className="">
        <Text className="mb-10 text-2xl font-semibold text-center ">
          Weather AI
        </Text>
        <Subtitle className="text-lg text-center">
          Powered by OpenAI and Next.js, Tailwind CSS, Tremor 2.0
        </Subtitle>

        <Divider className="my-10" />

        <Card className="">{/*City Picker component*/ <CityPicker />}</Card>
      </Card>
    </div>
  );
};

export default Header;

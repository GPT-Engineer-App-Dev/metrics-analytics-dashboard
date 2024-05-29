import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={4}>
      <VStack spacing={8} width="100%">
        <Text fontSize="4xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <HStack spacing={8} width="100%" justifyContent="space-around">
          <StatBox icon={FaDollarSign} label="Revenue" value="$50,000" change="+5%" />
          <StatBox icon={FaShoppingCart} label="Sales" value="1,200" change="+10%" />
          <StatBox icon={FaUsers} label="Customers" value="300" change="+2%" />
          <StatBox icon={FaChartLine} label="Growth" value="15%" change="+3%" />
        </HStack>
      </VStack>
    </Container>
  );
};

const StatBox = ({ icon, label, value, change }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" padding={4} width="200px" textAlign="center">
      <IconButton aria-label={label} icon={React.createElement(icon)} size="lg" isRound mb={4} />
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText>
          <StatArrow type={change.startsWith("+") ? "increase" : "decrease"} />
          {change}
        </StatHelpText>
      </Stat>
    </Box>
  );
};

export default Index;

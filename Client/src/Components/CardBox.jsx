import { Box, Card, CardBody, CardFooter, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react"
import React from "react"

const CardBox = ({title, text, date}) => {
  return (
    <div className="m-5 border solid">
      <Card width='350px' height='130px'>

        <CardBody>
            <Box>
              <Heading size="md" color='#2870C5' textDecoration="underline">
                {title}
              </Heading>
              <Text pt="4" color='#707070' fontSize="sm" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
               {text}
              </Text>
              <Text pt="3" color='#A2B5B3' fontSize="sm" textAlign='right' >
                {date}
              </Text>
            </Box>

        </CardBody>
      </Card>
    </div>
  )
}

export default CardBox

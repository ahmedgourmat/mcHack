import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react"
import React from "react"

const ScheduleBox = ({ session, title, text, width }) => {
  return (
    <div className="m-5 border solid rounded-md">
      <Card width={width} height='130px'>
        <CardBody>
          <Box>
            <Heading size="md">
              <Box>
                Session : <span style={{ color: "#2870C5" }}>{session}</span>
              </Box>
              <Box pt="2">
                Title : <span style={{ color: "#DAB909" }}>{title}</span>
              </Box>
            </Heading>
            <Text pt="2" fontSize="sm" color="#A2B5B3" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
              Note: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta ex aut magni consectetur laboriosam dicta velit consequatur esse excepturi illo.
            </Text>
          </Box>
        </CardBody>
      </Card>
    </div>
  )

}

export default ScheduleBox

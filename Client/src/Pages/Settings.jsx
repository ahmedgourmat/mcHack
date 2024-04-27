import {
    Button,
    FormControl,
    FormLabel,
    Image,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Switch,
  } from "@chakra-ui/react"
  import React from "react"
  import Vector8 from "../assets/Vector8.png"
  
  const Settings = () => {
    return (
      <div className="my-10 flex">
        <div className="border solid mx-10 w-[100%] h-[100%] rounded-xl">
          <div className="p-5">
            <p className="font-bold mb-2">Username</p>
            <Input placeholder="Peter Griffin" />
            <p className="text-[#57606A] mt-2">
              Your name may appear around Decuvault where you contribute or are
              mentioned. You can remove it at any time.
            </p>
  
            <p className="font-bold mb-2 mt-10">Public email</p>
            <Select placeholder="Select a verified email to display">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <p className="text-[#57606A] mt-2">
              You have set your email address to private. To toggle email privacy,
              go to email settings and uncheck "Keep my email address private."
            </p>
            <p className="font-bold mb-2 mt-10">Social accounts</p>
            <InputGroup mb="20px">
              <InputLeftAddon>
                <Image boxSize="15px" objectFit="cover" src={Vector8} />
              </InputLeftAddon>
              <Input placeholder="Link to social profile" />
            </InputGroup>
            <InputGroup mb="20px">
              <InputLeftAddon>
                <Image boxSize="15px" objectFit="cover" src={Vector8} />
              </InputLeftAddon>
              <Input placeholder="Link to social profile" />
            </InputGroup>
            <InputGroup mb="20px">
              <InputLeftAddon>
                <Image boxSize="15px" objectFit="cover" src={Vector8} />
              </InputLeftAddon>
              <Input placeholder="Link to social profile" />
            </InputGroup>
            <InputGroup mb="20px">
              <InputLeftAddon>
                <Image boxSize="15px" objectFit="cover" src={Vector8} />
              </InputLeftAddon>
              <Input placeholder="Link to social profile" />
            </InputGroup>
            <div className="mt-24 ">
              <p className="text-[25px]">Trending settings</p>
              <p className="font-bold mb-2 mt-6">Preferred spoken language</p>
              <Select placeholder="No Preference">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <p className="text-[#57606A] mt-6 mb-2">
                We'll use this language preference to summary the documents.
              </p>
              <Button>Save Trending settings</Button>
            </div>
            <div className="mt-10">
              <Button colorScheme="blue" width="30%">
                Update profile
              </Button>
            </div>
          </div>
        </div>
        <div className="border solid mr-10 w-[100%] h-[100hv] rounded-xl">
          <div className="p-5">
            <p className="text-[25px] mb-6">Trending settings</p>
            <p className="text-[#707070] font-semibold text-[20px]">ACCOUNT</p>
          </div>
          <div className="ml-5">
            <FormControl display="flex" alignItems="center" mb='20px'>
              <Switch id="email-alerts" size="lg" />
              <FormLabel htmlFor="email-alerts" ml="20px" textAlign="center">
              Email me when i get added to a session
              </FormLabel>
            </FormControl>
            <FormControl display="flex" alignItems="center" mb='20px'>
              <Switch id="email-alerts" size="lg" />
              <FormLabel htmlFor="email-alerts" ml="20px" textAlign="center">
              Email me when i new document is add in my sessions
              </FormLabel>
            </FormControl>
            <p className="text-[#707070] font-semibold text-[20px] mb-[20px] mt-[50px]">Application</p>
            <FormControl display="flex" alignItems="center" mb='20px'>
              <Switch id="email-alerts" size="lg" />
              <FormLabel htmlFor="email-alerts" ml="20px" textAlign="center">
              Acces to local documents
              </FormLabel>
            </FormControl>
            <FormControl display="flex" alignItems="center" mb='20px'>
              <Switch id="email-alerts" size="lg" />
              <FormLabel htmlFor="email-alerts" ml="20px" textAlign="center">
              Acces to camera
              </FormLabel>
            </FormControl>
  
          </div>
        </div>
      </div>
    )
  }
  
  export default Settings
import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react"

export default function CollapseEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle} bg={"green.400"} color="white" w="100%" mb={5}>Prerequisites</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='green.500'
            mt='0'
            mb='4'
            bg='lightgrey'
            rounded='md'
            shadow='md'
          >
            
          </Box>
        </Collapse>
      </>
    )
  }
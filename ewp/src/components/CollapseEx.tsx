import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react"

export default function CollapseEx() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Button onClick={onToggle} bg={"green.400"} color="white">Prerequisites</Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='green.500'
            mt='4'
            bg='lightgrey'
            rounded='md'
            shadow='md'
          >
            
          </Box>
        </Collapse>
      </>
    )
  }
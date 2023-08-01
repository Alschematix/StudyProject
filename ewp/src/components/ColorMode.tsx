import { useColorMode, Button, Icon } from "@chakra-ui/react"
import { BsFillLightbulbFill } from "react-icons/bs"


export function ToggleLight() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Icon onClick={toggleColorMode} as={BsFillLightbulbFill} cursor={'pointer'}>
          {colorMode === 'light' ? 'Dark' : BsFillLightbulbFill}
        </Icon>
      </header>
    )
  }
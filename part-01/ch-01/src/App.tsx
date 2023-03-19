import { Box, Button, chakra, Flex, Image } from "@chakra-ui/react"

const MyButton = chakra(Button, {
  baseStyle: {
    backgroundColor: "transparent",
    height: "100%",
    borderRadius: 0,
    "&:first-of-type": {
      borderStartRadius: "20px",
    },
    "&:last-of-type": {
      borderEndRadius: "20px",
    },
    "&:nth-child(n+2)": {
      borderLeft: "2px",
      borderColor: "gray.100",
    },
  },
})

const App = () => {
  return (
    <>
      <Flex
        direction="row"
        align="center"
        sx={{ "& *": { flexGrow: 1 }, p: 4 }}
        as="header"
      >
        <Image
          src="/comp_0685990 (1).png"
          alt="logo"
          sx={{
            height: 16,
            objectFit: "contain",
            objectPosition: "left center",
            flexBasis: "140px",
          }}
        />
        <Flex
          direction="row"
          sx={{
            height: "40px",
            p: "4px",
            borderColor: "gray.300",
            borderRadius: "20px",
            borderWidth: "2px",
            flexGrow: 0,
          }}
        >
          <MyButton>어디든지</MyButton>
          <MyButton>언제든 일주일</MyButton>
          <MyButton sx={{ pr: 0 }}>
            게스트 추가{" "}
            <Box
              sx={{
                ml: "8px",
                backgroundColor: "red.400",
                borderRadius: "50%",
                p: "8px",
                position: "relative",
                height: "100%",
              }}
            >
              <Image
                src="/Magnifying_glass_icon.svg"
                sx={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Box>
          </MyButton>
        </Flex>
        <Box sx={{ flexBasis: "140px" }} />
      </Flex>
    </>
  )
}

export default App

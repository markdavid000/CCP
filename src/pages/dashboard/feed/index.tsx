import CreateInput from "./components/CreateInput";
import Head from "./components/Head";
import DashboardLayout from "../../../layout/dashboardLayout";
import Content from "./components/Content";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Feed = () => {
  return (
    <DashboardLayout>
      <Head />
      <CreateInput />
      <Tabs>
        <TabList borderBottom={"1px solid #323436"} pb={".5rem"} gap={"1rem"}>
          <Tab
            _selected={{
              color: "#15AB99",
              boxShadow: "0px 0px 0px 1px #15AB99",
            }}
            _hover={{ color: "#15AB99", boxShadow: "0px 0px 0px 1px #15AB99" }}
            border={"none"}
            _focus={{ outline: "none" }}
            borderRadius={"0"}
          >
            For you
          </Tab>
          <Tab
            _selected={{
              color: "#15AB99",
              boxShadow: "0px 0px 0px 1px #15AB99",
            }}
            _hover={{ color: "#15AB99", boxShadow: "0px 0px 0px 1px #15AB99" }}
            border={"none"}
            _focus={{ outline: "none" }}
            borderRadius={"0"}
          >
            Your Posts
          </Tab>
          <Tab
            _selected={{
              color: "#15AB99",
              boxShadow: "0px 0px 0px 1px #15AB99",
            }}
            _hover={{ color: "#15AB99", boxShadow: "0px 0px 0px 1px #15AB99" }}
            border={"none"}
            _focus={{ outline: "none" }}
            borderRadius={"0"}
          >
            Live
          </Tab>
          <Tab
            _selected={{
              color: "#15AB99",
              boxShadow: "0px 0px 0px 1px #15AB99",
            }}
            _hover={{ color: "#15AB99", boxShadow: "0px 0px 0px 1px #15AB99" }}
            border={"none"}
            _focus={{ outline: "none" }}
            borderRadius={"0"}
          >
            Top Creators
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Content />
          </TabPanel>
          <TabPanel>
            <p>Your Posts</p>
          </TabPanel>
          <TabPanel>
            <p>Live</p>
          </TabPanel>
          <TabPanel>
            <p>Top Creators</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardLayout>
  );
};

export default Feed;

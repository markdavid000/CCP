import DashboardLayout from "../../../layout/dashboardLayout";
import Head from "./components/Head";
import Overview from "./components/Overview";

const Analytics = () => {
  return (
    <DashboardLayout>
      <Head />
      <Overview />
    </DashboardLayout>
  );
};

export default Analytics;

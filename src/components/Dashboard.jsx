
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
const Dashboard = () => {
    // const handleClick =() => {

    // }
  return (
    <div className="p-6">
        <div>
      <h1 className="text-3xl font-bold mb-4">PETWILL COSTRUCTION LTD</h1>
      <h2 className="text-2xl font-semibold mb-8">WELCOME TO OUR DASHBOARD</h2>
{/*       
      <button className='text-2xl font-semibold mb-8' onClick={handleClick}>DOWNLOAD REPORTS</button> */}
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {/* Email Metrics */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-8 h-8 text-blue-500 mr-4"><DonutLargeIcon /></div>
          <MarkEmailReadOutlinedIcon className="w-8 h-8 text-blue-500 mr-4" />
          <div>
            <h1 className="text-2xl font-semibold">12,361</h1>
            <h2>Email +14% Sent</h2>
          </div>
        </div>
        
        {/* Sales Metrics */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-8 h-8 text-green-500 mr-4"><DonutLargeIcon /></div>
          <PointOfSaleOutlinedIcon className="w-8 h-8 text-green-500 mr-4" />
          <div>
            <h1 className="text-2xl font-semibold">431,22</h1>
            <h2>Sales Obtained +21%</h2>
          </div>
        </div>

        {/* Reports Metrics */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-8 h-8 text-yellow-500 mr-4"><DonutLargeIcon /></div>
          <DownloadOutlinedIcon className="w-8 h-8 text-yellow-500 mr-4" />
          <div>
            <h1 className="text-2xl font-semibold">32,441</h1>
            <h2>New Reports +5%</h2>
          </div>
        </div>

        {/* Clients Metrics */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-8 h-8 text-purple-500 mr-4"><DonutLargeIcon /></div>
          <PersonAddOutlinedIcon className="w-8 h-8 text-purple-500 mr-4" />
          <div>
            <h1 className="text-2xl font-semibold">30,440</h1>
            <h2>New Clients +10%</h2>
          </div>
        </div>

        {/* Traffic Metrics */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <div className="w-8 h-8 text-red-500 mr-4"><DonutLargeIcon /></div>
          <TrafficOutlinedIcon className="w-8 h-8 text-red-500 mr-4" />
          <div>
            <h1 className="text-2xl font-semibold">1,325,134</h1>
            <h2>Traffic Received +43%</h2>
          </div>
        </div>
      </div>
    

      {/* Recent Transactions */}
      <div className="mb-8 mr-4">
        <h1 className="text-2xl font-semibold mb-4">Recent Transactions</h1>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4">Recent Transactions</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Transaction ID</th>
                <th className="py-2 px-4 text-left">Username</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">01e4dsa</td>
                <td className="py-2 px-4">johndoe</td>
                <td className="py-2 px-4">2023-09-01</td>
                <td className="py-2 px-4">$43.95</td>
              </tr>
              <tr>
                <td className="py-2 px-4">0314dsaa</td>
                <td className="py-2 px-4">jackdowern</td>
                <td className="py-2 px-4">2023-09-04</td>
                <td className="py-2 px-4">$133.45</td>
              </tr>
              <tr>
                <td className="py-2 px-4">01e4dsa</td>
                <td className="py-2 px-4">aberdohnny</td>
                <td className="py-2 px-4">2023-09-09</td>
                <td className="py-2 px-4">$43.97</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       {/* Revenue Generated */}
       <div className="mb-8">
        <DownloadOutlinedIcon className="w-8 h-8 text-blue-500 mr-4" />
        <DonutLargeIcon className="w-8 h-8 text-blue-500 mr-4" />
        <div>
          <h1 className="text-2xl font-semibold mb-1">Revenue Generated</h1>
          <h2>$59,342.32</h2>
        </div>
      </div>
    </div>


      {/* Campaign */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-4">Campaign</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <DonutLargeIcon className="w-8 h-8 text-blue-500 mb-2" />
          <h2>$48,354 revenue generated</h2>
          <h3>Include extra misc expenditures and costs</h3>
        </div>
      </div>

      {/* Sales Quantity */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Sales Quantity</h1>
        {/* Add sales quantity content here */}
      </div>
      {/* Geography Based Traffic */}
      <div className="flex mb-8">
        <div className="mr-4">
          <h1 className="text-2xl font-semibold">Geography Based Traffic</h1>
        </div>
      </div>
    </div>
    
  );
}


export default Dashboard;


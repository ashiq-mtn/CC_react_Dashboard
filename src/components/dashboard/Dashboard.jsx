import { useState, useEffect } from 'react';
import Joyride from 'react-joyride';
import { tutorialSteps } from './tutorialSteps';
import Navbar from './Navbar.jsx';
import Maps from './Map.jsx';
import HeaderCard from './HeaderCard.jsx';
import PieChart from './PieChart.jsx';
import Table from './Table.jsx';
import Toast from './Toast.jsx';

function Dashboard() {
  const [runTutorial, setRunTutorial] = useState(false);

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('dashboardTutorialComplete');
    if (isFirstVisit) {
      setRunTutorial(true);
    }
  }, []);

  const handleTutorialComplete = () => {
    localStorage.setItem('dashboardTutorialComplete', 'true');
  };

  return (
    <div className='min-h-screen w-full overflow-x-hidden'>
      <Joyride
        steps={tutorialSteps}
        run={runTutorial}
        continuous
        showProgress
        showSkipButton
        styles={{
          options: {
            primaryColor: '#3b82f6',
            textColor: '#374151'
          }
        }}
        callback={({ status }) => {
          if (['finished', 'skipped'].includes(status)) {
            handleTutorialComplete();
          }
        }}
      />
      <Navbar />
      <main className='flex-1 p-6'>
        <div className="header-card">
          <HeaderCard />
        </div>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-4 my-5 mt-9'>
          <div className='flex-1 bg-white rounded-sm shadow-md pie-chart'>
            <PieChart />
          </div>
          <div className='flex-1 bg-white rounded-sm shadow-md min-h-[300px] map-container'>
            <Maps />
          </div>
        </div>
        <div className="table-container">
          <Table />
        </div>
        <div className="notification-area">
          <Toast />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

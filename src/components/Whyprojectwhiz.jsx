import React from 'react'
import { why1, why2, why3 } from '../assets'
function Whyprojectwhiz() {
  return (
    <div id='whyprojectwhiz' className="bg-gradient-to-r from-blue-300 to-blue-600">
        <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
                <g className="wave" fill="#f8fafc">
                    <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
                </g>
                <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                        <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                        <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                        <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                </g>
            </g>
        </g>
    </svg>

    <div id='whyprojectwhiz' className="bg-gradient-to-r from-blue-300 to-blue-600">
        <div className='flex items-center justify-center text-white text-4xl font-bold py-4'>
            Why ProjectWhiz ?
        </div>
      {/* First section */}
      
      <div className='max-md:py-8 max-md:px-4 py-12 xl:px-72 lg:px-36 md:px-10'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
          {/* Image */}
          <div className="max-md:w-full">
            <img src={why1} alt="why1" className='rounded-3xl w-full' />
          </div>
          {/* Text */}
          <div className='bg-slate-100 rounded-3xl px-10 py-10 max-md:py-10 text-slate-900'>
            <div className='max-md:text-2xl text-3xl font-semibold mb-4'>
              Seamless Collaboration:
            </div>
            <div className='max-md:text-sm md:text-md text-lg text-justify'>
            ProjectWhiz provides real-time communication channels that allow team members to collaborate instantly. Whether through chat, comments, or notifications, everyone stays connected and informed, reducing delays in decision-making and task execution. This seamless integration of communication tools ensures that no important information gets lost.    
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className='max-md:py-8 max-md:px-4 py-12 xl:px-72 lg:px-36 md:px-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Image */}
            <div className="max-md:w-full">
            <img src={why2} alt="why2" className='rounded-3xl w-full' />
          </div>
          {/* Text */}
          <div className='bg-slate-100 rounded-3xl px-10 py-10 max-md:py-10 text-slate-900'>
            <div className='max-md:text-2xl text-3xl font-semibold mb-4'>
           
              Data-Driven Insights:
              </div>
            <div className='max-md:text-sm md:text-md text-lg text-justify'>
              From tracking key metrics to visualizing data trends, our platform provides comprehensive analytics dashboards that enable users to make informed decisions quickly. With real-time access to project data, teams can identify areas for improvement, allocate resources effectively, and optimize project workflows, ultimately driving project success.
            </div>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className='max-md:py-8 max-md:px-4 py-12 xl:px-72 lg:px-36 md:px-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Image */}
            <div className="max-md:w-full">
            <img src={why3} alt="why3" className='rounded-3xl w-full' />
          </div>
          {/* Text */}
          <div className='bg-slate-100 rounded-3xl px-10 py-10 max-md:py-10 text-slate-900'>
            <div className='max-md:text-2xl text-3xl font-semibold mb-4'>
           
              Efficient Progress Tracking
              </div>
            <div className='max-md:text-sm md:text-md text-lg text-justify'>
              Meeting deadlines is crucial. Our app offers robust tracking features, allowing teams to monitor project progress and task statuses in real-time. Automated alerts keep everyone informed of approaching deadlines, helping teams prioritize tasks and stay on track to achieve project goals.
            </div>
          </div>
        </div>
      </div>
    </div>

    <svg viewBox="0 0 1428 174" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                </g>
                <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
            </g>
        </svg>
    </div>
  )
}

export default Whyprojectwhiz
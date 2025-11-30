import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, Building2, Home, School, Hotel, Building, Calendar } from 'lucide-react';

interface Project {
  client: string;
  projectType: string;
  projectName?: string;
  builtUpArea: string;
  location?: string;
  workType?: string;
  company?: string;
  architect?: string;
}

interface YearData {
  year: number;
  projects: Project[];
}

const timelineData: YearData[] = [
  {
    year: 1998,
    projects: [
      { client: 'Mr. MATHEW', projectType: 'Residential', builtUpArea: '32 sq.ft.', location: '2nd Main, 2nd Cross, R.T. Nagar, Bangalore – 560 032' },
      { client: 'Mr. LAKSHMI KANTH', projectType: 'Commercial', builtUpArea: '7,500 sq.ft.', location: 'Raja Market, Avenue Road, Bangalore' },
      { client: 'Mr. MOSIN SAIT', projectType: 'Commercial', builtUpArea: '18,000 sq.ft.', location: 'Silver Line Construction Pvt. Ltd.' },
      { client: 'Mr. RAJU', projectType: 'Residential', builtUpArea: '6,500 sq.ft.', location: 'Tyagraj Nagar, Bangalore' },
    ]
  },
  {
    year: 1999,
    projects: [
      { client: 'Mr. PRAKASH (G.M.)', projectType: 'Commercial', workType: 'Civil Work', builtUpArea: '190,000 sq.ft.', location: 'Kanija Bhavan, Race Course Road, Bangalore' },
      { client: 'Mr. BHASKAR RAJU', projectType: 'Commercial', workType: 'Civil Work', projectName: 'Deveshree Chamber', builtUpArea: '135,000 sq.ft.', location: 'Langford Road, Shanthi Nagar, Bangalore' },
    ]
  },
  {
    year: 2000,
    projects: [
      { client: 'Mr. MAHENDRA SINGH', projectType: 'Commercial', projectName: 'Philips Software, Philips Video Con Engineering Pvt. Ltd.', builtUpArea: '255,000 sq.ft.', location: 'Marappa Road, Ulsoor, Bangalore' },
      { client: 'Mr. ABHISHIK RATHORE (G.M.)', projectType: 'Guest House', projectName: 'Additiya Birla Group Valpari Coffee Estate', builtUpArea: '13,000 sq.ft.', location: 'Valpari, Tamil Nadu' },
    ]
  },
  {
    year: 2001,
    projects: [
      { client: 'Mr. KULVENDER SINGH (P.M)', projectType: 'Commercial', company: 'B. L. Kashab & Sons Pvt Ltd.', builtUpArea: '95,000 sq.ft.', location: 'H.S. Complex, Whitefield, Bangalore' },
      { client: 'Mr. AHMED BHAI', projectType: 'Residential', projectName: 'Malabar Gold', builtUpArea: '15,000 sq.ft.', location: 'Malabar Hills, Calicut, Kerala' },
      { client: 'Mr. TONY', projectType: 'Commercial', projectName: 'Tony Associates', builtUpArea: '18,000 sq.ft.', location: 'Malapuram, Kerala' },
    ]
  },
  {
    year: 2002,
    projects: [
      { client: 'Mr. ALEEM (P.M.)', projectType: 'Commercial', company: 'Prestige Group Pvt. Ltd.', builtUpArea: '580,000 sq.ft.', location: 'Acropolis, Madiwal Junction, Bangalore' },
      { client: 'Mr. MURTHI (P.M.)', projectType: 'Residential', workType: 'Civil Work', company: 'Tarapur Construction Pvt. Ltd.', projectName: 'Residential Apartment', builtUpArea: '240,000 sq.ft.', location: 'Indira Nagar, Old Madras Road, Bangalore' },
    ]
  },
  {
    year: 2003,
    projects: [
      { client: 'Mr. Aditiya Kumar (P.M.)', projectType: 'Commercial', workType: 'Civil work', company: 'L & T Project Ltd.', projectName: 'G.E. Software', builtUpArea: '84,000 sq.ft.', location: 'Whitefield, Bangalore' },
      { client: 'Mr. VENKAT RAO', projectType: 'Commercial', workType: 'Civil Work', projectName: 'Infosys Auditorium Building', builtUpArea: '152,000 sq.ft.', location: 'Electronic City, 2nd Phase, Bangalore' },
    ]
  },
  {
    year: 2004,
    projects: [
      { client: 'Mr. VINAY SHETTY', projectType: 'Commercial', workType: 'Civil Work', projectName: 'Brigade Garden Restaurant', builtUpArea: '5,000 sq.ft.', location: 'Brigade Road, Bangalore' },
      { client: 'Mr. SATISH', projectType: 'Residential', architect: 'Satish Sholin Architect', builtUpArea: '6,000 sq.ft.', location: 'Basavanagudi, Bangalore' },
      { client: 'Mr. PRASANNA KUMAR', projectType: 'Residential', builtUpArea: '5,000 sq.ft.', location: '27th Main, Basavanagudi, South End Circle, Bangalore' },
      { client: 'Mr. M.S. LAXMI DEVI', projectType: 'Residential', builtUpArea: '7,000 sq.ft.', location: '10th Cross, Wilson Garden, Bangalore' },
    ]
  },
  {
    year: 2005,
    projects: [
      { client: 'Mr. SRINIVAS (A.C.P.)', projectType: 'Residential', builtUpArea: '4,500 sq.ft.', location: '13th \'A\' Cross, Sahakarnagar, Kodigehalli, Bangalore' },
      { client: 'Mr. SUNIL', projectType: 'Commercial', workType: 'Civil Work', company: 'Cap India Construction Pvt. Ltd.', builtUpArea: '23,000 sq.ft.', location: 'Pratham Motors Car Showroom, Outer Ring Road, Sarjapurar, Bangalore' },
      { client: 'Mr. MUNAWAR SHARIF', projectType: 'Residential', builtUpArea: '3,000 sq.ft.', location: '3rd Cross, Kanakanagar, R.T. Nagar, Bangalore' },
      { client: 'Mr. Vankat Rao', projectType: 'Residential', builtUpArea: '4,000 sq.ft.', location: 'Devegowda Road, Mattadahalli, R. T. Nagar, Bangalore' },
      { client: 'Mr. SYED NIZAMUDDIN (IPS)', projectType: 'Residential', builtUpArea: '11,000 sq.ft.', location: 'Venkateshpuram, Extension Area, Bangalore' },
    ]
  },
  {
    year: 2006,
    projects: [
      { client: 'Mr. BOTHRA', projectType: 'Commercial', company: 'Maitri Farm Pvt. Ltd.', builtUpArea: '9,000 sq.ft.', location: 'Kalyan Nagar Main Road, Basavanagudi, Bangalore' },
      { client: 'Mr. MUNDRAJU', projectType: 'Residential', builtUpArea: '12,000 sq.ft.', location: 'Ittamadu, Banashakari, Bangalore' },
      { client: 'Mr. SHIVE RAME GOWDA (MLA)', projectType: 'Residential', workType: 'Finishing work', builtUpArea: '16,000 sq.ft.', location: 'Manjunatha Nagar, Banashankari, Bangalore' },
      { client: 'Mr. DHARVINDER KUMAR (AD. BDA)', projectType: 'Residential', builtUpArea: '8,000 sq.ft.', location: '2nd Stage, Banashankari, Bangalore' },
      { client: 'Mr. ISHTAQ', projectType: 'Commercial', workType: 'Finishing work', projectName: 'Bombay dreams club', builtUpArea: '14,000 sq.ft.', location: 'Konark Hotel, Residency Road, Bangalore' },
    ]
  },
  {
    year: 2007,
    projects: [
      { client: 'Mrs. LAKSHMI (P.M.)', projectType: 'Commercial', workType: 'Civil work', company: 'CCCL Construction Pvt. Ltd.', builtUpArea: '72,000 sq.ft.', location: 'Srirama Gateway, Tambaram, Chennai' },
      { client: 'Mr. SACHIN PONDROY (A.G.M)', projectType: 'Residential', workType: 'Civil Work', company: 'Aluvallya Construction Pvt. Ltd.', builtUpArea: '160,000 sq.ft.', location: 'Tanjavar Road, Chennai' },
      { client: 'Mr. SRAVANA (P.M.)', projectType: 'Commercial', workType: 'Finishing civil work', company: 'Nokia System Pvt. Ltd.', builtUpArea: '110,000 sq.ft.', location: 'Mahandra City, Chennai' },
    ]
  },
  {
    year: 2008,
    projects: [
      { client: 'Mr. ASHOK PRABHU', projectType: 'Commercial', workType: 'Finishing work', builtUpArea: '17,000 sq.ft.', location: 'Kenhood Interals, Residency Road, Bangalore' },
      { client: 'Mr. SWAMY (CE. BSNL)', projectType: 'Residential', builtUpArea: '6,000 sq.ft.', location: 'Yelahanka New Town, Bangalore' },
      { client: 'Mr. NILYAPPAN (KEB AD)', projectType: 'Residential', builtUpArea: '', location: 'Jalvayu Vihar Tank, Babusab Palya, Bangalore' },
    ]
  },
  {
    year: 2009,
    projects: [
      { client: 'Mrs. NOOR SIDDIQA', projectType: 'Villa', builtUpArea: '14,000 sq.ft', location: 'No.1, BBM Road, Bhadravathi, Shivmoga' },
      { client: 'Mr. PRASAD', projectType: 'Residential', builtUpArea: '5,000 sq.ft.', location: 'HAL 2nd Division, Basava Nagar, Bangalore' },
      { client: 'Mr. JOYTHI PRAKASH', projectType: 'Commercial', builtUpArea: '13,000 sq.ft.', location: 'Munyakolla, Outer ring road, Marathahalli, Bangalore' },
    ]
  },
  {
    year: 2010,
    projects: [
      { client: 'Mr. HAMID', projectType: 'Commercial', workType: 'Civil work', projectName: 'Hotel Rainbow', builtUpArea: '15,000 sqft.', location: 'N.R. Road, City Market, Bangalore' },
      { client: 'Mr. IMRAN SAIT', projectType: 'Commercial', projectName: 'Autoworld', builtUpArea: '8,000 sq.ft.', location: 'Autoworld, 1st Cross, J.C. Road, Bangalore' },
      { client: 'Mr. KALEEM', projectType: 'Commercial', projectName: 'AM Car Accessories', builtUpArea: '3,000 sq.ft.', location: '1st Cross, Journalist Colony, J.C. Road, Bangalore' },
      { client: 'Ms. PRIYA', projectType: 'Residential', builtUpArea: '2,000 sq.ft.', location: 'Chikkalsandra Road, Behind Parle G Biscuit Factory, Peenya, Bangalore' },
    ]
  },
  {
    year: 2011,
    projects: [
      { client: 'Mr. ATIULLA KHAN', projectType: 'Commercial', builtUpArea: '22,000 sq.ft.', location: 'Old Mysore Sandle Soap factory, S.J.P. Road, Bangalore' },
      { client: 'Mr. MAHESH', projectType: 'Commercial', projectName: 'Titan Showroom', builtUpArea: '5,000 sq.ft', location: 'T. Nagar, Chennai' },
      { client: 'Mr. GRISH', projectType: 'Residential', builtUpArea: '3,000 sq.ft.', location: 'Balaji Layout, Hegdenagar, Bangalore' },
      { client: 'Ms. SEEMA', projectType: 'Residential', builtUpArea: '22,000 sq.ft.', location: 'Dodderi Main Road, Bhadrawathi, Shivmoga' },
    ]
  },
  {
    year: 2012,
    projects: [
      { client: 'Mr. RENUKA SWAMY', projectType: 'Residential', builtUpArea: '8,000 sq.ft.', location: 'Teachers Colony, HSR Layout, Bangalore' },
      { client: 'Mr. SHARIFULLA', projectType: 'Commercial', builtUpArea: '7,000 sq.ft.', location: 'S.J.P Road, City Market, Bangalore' },
      { client: 'Mr. TAJ', projectType: 'Residential', builtUpArea: '2,000 sq.ft.', location: 'Dodda Basti, Ullala, Kengeri, Bangalore' },
      { client: 'Mr. CHANDRAPPA', projectType: 'Residential', company: 'A.S. Property Pvt. Ltd.', builtUpArea: '5,000 sq.ft.', location: 'Sultanpet, Nandi Hills, Devanahalli' },
    ]
  },
  {
    year: 2013,
    projects: [
      { client: 'Mr. GUPTA', projectType: 'Residential', builtUpArea: '13,000 sq.ft.', location: 'Hollywood Town, Sadahalli Gate, Devanahalli' },
      { client: 'Mr. VINOD', projectType: 'PG', builtUpArea: '6,000 sq.ft.', location: 'Marathahalli Main Road, Bangalore' },
      { client: 'Mr. AKRAM PASHA', projectType: 'Commercial', builtUpArea: '5,000 sq.ft.', location: 'Bihind Gopalan Mall, Gurdahalli, Mysore Road, Bangalore' },
      { client: 'Mr. PRABHU CHAUHAN', projectType: 'Residential', builtUpArea: '3,000 sq.ft.', location: 'Manyatha Back gate, Tanisandra, Bangalore' },
      { client: 'Mr. KISHORE CHAUDARI', projectType: 'Residential', builtUpArea: '5,000 sq.ft.', location: 'BDA Layout, Thanisandra, Bangalore' },
    ]
  },
  {
    year: 2014,
    projects: [
      { client: 'Mr. ATTAULLA', projectType: 'Commercial', projectName: 'SM Pipe Industries', builtUpArea: '6,000 sq.ft.', location: '4th Cross, Kalasipalya, Bangalore' },
      { client: 'Mr. MANSOOR AHMED', projectType: 'Commercial', builtUpArea: '5,000 sq.ft.', location: 'Bamboo Bazar, City Market, Bangalore' },
      { client: 'Mr. JAVEED', projectType: 'Residential', builtUpArea: '3,000 sq.ft.', location: 'Daddy\'s Garden, Chandapura, Bangalore' },
      { client: 'Mr. LOKESH', projectType: 'Residential', builtUpArea: '9,000 sq.ft.', location: 'SRS Travels, Suriya City, Attibele Road, Bangalore' },
    ]
  },
  {
    year: 2015,
    projects: [
      { client: 'Mr. SANJAY', projectType: 'Residential', builtUpArea: '4,000 sq.ft.', location: 'Prakash Nagar, Magdi Road, Bangalore' },
      { client: 'Mr. ROHIT GOWDA', projectType: 'Residential', builtUpArea: '4,500 sq.ft.', location: 'Nayandahalli, Bangalore' },
      { client: 'Mr. AJEET SHARMA', projectType: 'Commercial', builtUpArea: '4,000 sq.ft.', location: 'Bombay Clothing, Commercial Street, Bangalore' },
      { client: 'Mr. IMTIYAZ JALEEL', projectType: 'Mosque', builtUpArea: '5,000 sq.ft.', location: 'Oppt Shifa Hospital, Broadway Road, Shivajinagar, Bangalore' },
    ]
  },
  {
    year: 2016,
    projects: [
      { client: 'DR.MOYUDDIN', projectType: 'Commercial', builtUpArea: '8,000 sqft', location: 'Site VRL Logistic BH Road' },
      { client: 'MR.THIMMA RAJU', projectType: 'Commercial', projectName: 'Nanda garments', builtUpArea: '13,000 sqft', location: 'Upparhalli Tumkur' },
      { client: 'MS.YASMEEN BANU', projectType: 'Residential', builtUpArea: '2,000 sqft', location: 'Kothitop Tumkur' },
      { client: 'MR. AH GOWDA', projectType: 'Residential', builtUpArea: '4,000 sqft', location: 'Kunigal road Tumkur' },
      { client: 'MR.KRISHNA MURTHY', projectType: 'Residential', builtUpArea: '8,000 sqft', location: 'Sarasavathi Puram Tumkur' },
      { client: 'DR.CHANDRA SHAKER', projectType: 'Residential', builtUpArea: '3,000 sqft', location: 'Jayanagar Tumkur' },
      { client: 'MR.MURGA SWAMY', projectType: 'Residential', builtUpArea: '9,000 sqft', location: 'Bhatvadi Tumkur' },
      { client: 'MR.SANAULLA', projectType: 'Mosque', projectName: 'Dodderi Jamiya Masjid', builtUpArea: '11,000 sqft', location: 'Badaravathi' },
    ]
  },
  {
    year: 2017,
    projects: [
      { client: 'MR.PRASAD REDDY', projectType: 'School', company: 'Sathi Guru Infratech Pvt Ltd', builtUpArea: '72,000 sqft', location: 'School Building Hanamanthapura, Tumkur' },
      { client: 'MR.SUNIL KUMAR', projectType: 'School', projectName: 'Shri Chaitanya Techno PU College', builtUpArea: '90,000 sqft', location: 'Kothitop Tumkur' },
      { client: 'MR.RAMESH', projectType: 'Residential', builtUpArea: '3,000 sqft', location: 'Shamnur Layout Davanagere' },
      { client: 'MR.SIDALINGAPPA', projectType: 'Commercial', builtUpArea: '7,000 sqft', location: 'Gundi Circle TB road, Davanagere' },
      { client: 'MR.MAHESH APPA', projectType: 'Commercial', builtUpArea: '5,000 sqft', location: 'Harier road SSRK Davanagere' },
    ]
  },
  {
    year: 2018,
    projects: [
      { client: 'MR.ASHOK', projectType: 'Commercial', builtUpArea: '7,000 sqft', location: 'Chalkera road Canera Bank, Chitradurga' },
      { client: 'MR.VINOD SHETTY', projectType: 'Commercial', projectName: 'Hotel Priyadarshani', builtUpArea: '5,000 sqft', location: 'Opp to Jagluru bus stand, Davanagere' },
      { client: 'MR.PROMOD KUMAR', projectType: 'Commercial', builtUpArea: '4,000 sqft', location: 'Ullala Basti main road, Kengeri Bangalore' },
      { client: 'MS.TAJASVANI', projectType: 'Residential', builtUpArea: '3,000 sqft', location: 'Vidhyanagar Shivamogga' },
      { client: 'MR.JAYANNA', projectType: 'Educational', projectName: 'Vidhyavani Degree College And Vidhyavani Hostel', builtUpArea: '24,000 sqft', location: 'Tumkur' },
    ]
  },
  {
    year: 2019,
    projects: [
      { client: 'MR.DAYANANDA', projectType: 'PG', builtUpArea: '5,000 sqft', location: 'Near Reva College Yelankha' },
      { client: 'MR.MOHISNI SAIT', projectType: 'Residential', builtUpArea: '4,000 sqft', location: '2nd Stage Chandra layout' },
      { client: 'MR.MUJAHID', projectType: 'Residential', builtUpArea: '6,000 sqft', location: '2nd Stage Chandra layout' },
    ]
  },
  {
    year: 2020,
    projects: [
      { client: 'MR.MURLI', projectType: 'Commercial', builtUpArea: '3,000 sqft', location: 'Nittur Circle Hassan' },
      { client: 'Mr.Nagaraj', projectType: 'Residential', builtUpArea: '3,000 sqft', location: 'Shivamoga road Holahunnur' },
      { client: 'MS.GEETHA', projectType: 'Residential', builtUpArea: '5,000 sqft', location: 'Ma doddi behind bannerghatta National park' },
      { client: 'Mr.SYED ABRAR', projectType: 'Commercial', builtUpArea: '4,000 sqft', location: 'Behind Gopalam Mall, Old Gurdahalli Mysore raod, Bangalore' },
    ]
  },
  {
    year: 2021,
    projects: [
      { client: 'MR.BALA KRISHNA', projectType: 'College', projectName: 'Basaveshwara college', builtUpArea: '54,000 sqft', location: 'BH road Tiptur' },
      { client: 'MS.SAVITHAAMMA', projectType: 'Residential', builtUpArea: '2,000 sqft', location: 'T Bejur Nelamangala' },
      { client: 'MR.SALENG KUAMR', projectType: 'Commercial', company: 'B M R C L Ltd', projectName: 'KR Puram Office Building', builtUpArea: '12,0000 sqft', location: 'KR Puram, Bangalore' },
      { client: 'MR.RAVINDRA KUMAR', projectType: 'Residential', builtUpArea: '4,000 sqft', location: 'Tanisandra' },
    ]
  },
  {
    year: 2022,
    projects: [
      { client: 'MR.VISHVANATH', projectType: 'Commercial', projectName: 'Reliance Digital Building', builtUpArea: '19,000 sqft', location: 'BH road Tumkur' },
      { client: 'MR.SACHIN NAYAK', projectType: 'Residential', builtUpArea: '3,000 sqft', location: 'H cross Chintamani road' },
      { client: 'MR.JORDGE', projectType: 'Residential', builtUpArea: '5,000 sqft', location: 'Venkatesh Puram Taniroad Bangalore' },
    ]
  },
  {
    year: 2023,
    projects: [
      { client: 'MR.VITTAL RAO', projectType: 'Residential', builtUpArea: '4,000 sqft', location: 'SS Puram Tumkur' },
      { client: 'MR.AKLESH', projectType: 'Commercial', builtUpArea: '8,000 sqft', location: 'Lalbhag road Sudimnagar Bangalore' },
      { client: 'MR.VENUGOPAL SWAMY', projectType: 'Residential', builtUpArea: '7,000 sqft', location: 'Shamnur layout Davangere' },
    ]
  },
  {
    year: 2024,
    projects: [
      { client: 'MR.DHANA RAJ', projectType: 'Residential', builtUpArea: '3,000 sqft', location: 'Manjunatha Layout, Archarya College road Peenya Bangalore' },
      { client: 'MR.JAGANATHA', projectType: 'Residential', builtUpArea: '4,000 sqft', location: 'Bellur road Chikamangaluru' },
      { client: 'MR.SHRIKANTHAYA', projectType: 'Residential', builtUpArea: '2,000 sqft', location: 'KR road Banashankare Tagaraja nagar Bangalore' },
      { client: 'MR.BOSTBABBAN', projectType: 'Residential', builtUpArea: '2,500 sqft', location: 'Ashwath nagar tele com layout Bangalore' },
    ]
  },
  {
    year: 2025,
    projects: [
      { client: 'MR.SARDAR KHAN', projectType: 'Residential', builtUpArea: '5,000 sqft', location: 'BBM road Badaravathi' },
      { client: 'MR.ASHOK MITTAL', projectType: 'Bungalow', company: 'Mittal Industries Pvt Ltd', builtUpArea: '8,000 sqft', location: '18th cross sadashiva nagar Bangalore' },
      { client: 'DR.AISHWARYA', projectType: 'Villa', builtUpArea: '7,000 sqft', location: 'Behind ashwini college Tumkur' },
      { client: 'MR.SYED TEVREZ AHMED', projectType: 'Residential', builtUpArea: '4,000 sqft', location: 'BH road Gubi Tumkur' },
      { client: 'MS. S.UMAMAHESHWARI', projectType: 'Commercial', builtUpArea: '13,000 sqft', location: 'More road frazar town Bangalore' },
    ]
  },
];

const projectTypeIcons: Record<string, any> = {
  'Residential': Home,
  'Commercial': Building2,
  'School': School,
  'College': School,
  'PG': Building,
  'Mosque': Building,
  'Villa': Home,
  'Bungalow': Home,
  'Hotel': Hotel,
  'Guest House': Hotel,
  'Educational': School,
};

export default function WorkTimeline() {
  // Keep first year open by default
  const [selectedYear, setSelectedYear] = useState<number | null>(timelineData[0]?.year || null);
  const [filter, setFilter] = useState<string>('All');

  // Get unique project types with counts
  const typeCounts = timelineData.reduce((acc, yearData) => {
    yearData.projects.forEach(project => {
      acc[project.projectType] = (acc[project.projectType] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // Get all types except Residential and Commercial
  const otherTypes = Array.from(
    new Set(timelineData.flatMap(year => year.projects.map(p => p.projectType)))
  ).filter(type => type !== 'Residential' && type !== 'Commercial')
    .sort((a, b) => (typeCounts[b] || 0) - (typeCounts[a] || 0)); // Sort by count descending

  // Order: All, Residential, Commercial, then others by count
  const projectTypes = ['All', 'Residential', 'Commercial', ...otherTypes];

  const filteredTimeline = timelineData.map(yearData => ({
    ...yearData,
    projects: filter === 'All' 
      ? yearData.projects 
      : yearData.projects.filter(p => p.projectType === filter)
  })).filter(yearData => yearData.projects.length > 0);

  const toggleYear = (year: number) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  return (
    <>
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-mystic-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-red-inferno/20 to-mystic-navy"></div>
        </div>
        <div className="relative container-custom py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-[2.7rem] md:text-[3.6rem] font-heading font-bold mb-6">
              Work <span className="text-cream">Timeline</span>
            </h1>
            <p className="text-xl text-gray-200">
              27+ years of construction excellence - Our journey from 1998 to present
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white shadow-md py-4">
        <div className="container-custom">
          <div className="flex gap-3 justify-start md:justify-center overflow-x-auto pb-2 hide-scrollbar">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                  filter === type
                    ? 'bg-red-inferno text-white'
                    : 'bg-cream text-mystic-navy hover:bg-blue-gray hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-5xl">
          <div className="space-y-8">
            {filteredTimeline.map((yearData) => {
              const isExpanded = selectedYear === yearData.year;
              const IconComponent = Calendar;
              
              return (
                <motion.div
                  key={yearData.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Year Header */}
                  <button
                    onClick={() => toggleYear(yearData.year)}
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-cream/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-inferno rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-heading font-bold text-mystic-navy">
                          {yearData.year}
                        </h3>
                        <p className="text-sm text-blue-gray">
                          {yearData.projects.length} {yearData.projects.length === 1 ? 'Project' : 'Projects'}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-mystic-navy"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Projects List */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-4">
                      {yearData.projects.map((project, index) => {
                        const ProjectIcon = projectTypeIcons[project.projectType] || Building2;
                        const displayClient = project.client || 'Client';
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                            transition={{ delay: index * 0.05 }}
                            className="border-l-4 border-red-inferno pl-4 py-3 bg-cream/30 rounded-r-lg hover:bg-cream/50 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1">
                                <ProjectIcon className="w-5 h-5 text-red-inferno flex-shrink-0" />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <h4 className="font-heading font-semibold text-mystic-navy">
                                    {displayClient}
                                  </h4>
                                  <span className="px-2 py-1 bg-red-inferno/10 text-red-inferno rounded text-xs font-medium">
                                    {project.projectType}
                                  </span>
                                  {project.workType && (
                                    <span className="px-2 py-1 bg-blue-gray/10 text-blue-gray rounded text-xs font-medium">
                                      {project.workType}
                                    </span>
                                  )}
                                </div>
                                {project.company && (
                                  <p className="text-sm font-medium text-mystic-navy mb-1">
                                    {project.company}
                                  </p>
                                )}
                                {project.projectName && (
                                  <p className="text-sm font-medium text-mystic-navy mb-1">
                                    {project.projectName}
                                  </p>
                                )}
                                {project.architect && (
                                  <p className="text-xs text-blue-gray mb-1">
                                    Architect: {project.architect}
                                  </p>
                                )}
                                <div className="flex flex-wrap items-center gap-4 text-sm text-blue-gray mt-2">
                                  {project.builtUpArea && (
                                    <span className="flex items-center gap-1">
                                      <Building2 className="w-4 h-4" />
                                      {project.builtUpArea}
                                    </span>
                                  )}
                                  {project.location && (
                                    <span className="flex items-center gap-1">
                                      <MapPin className="w-4 h-4" />
                                      {project.location}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
      </div>
    </>
  );
}

import React from 'react';
import Card from './Card';
import { useTheme } from '@/context/ThemeContext';

const FeatureSection: React.FC = () => {
  const { theme } = useTheme();
  
  // Define specialty-specific features
  const specialtyFeatures = {
    default: [
      {
        title: "Health Monitoring",
        description: "Track your vitals and health metrics in real-time with our advanced monitoring system.",
        icon: <HealthMonitorIcon />
      },
      {
        title: "Medication Management",
        description: "Never miss a dose with intelligent medication reminders and tracking.",
        icon: <MedicationIcon />
      },
      {
        title: "Telemedicine",
        description: "Connect with healthcare providers from the comfort of your home.",
        icon: <TelemedicineIcon featured={true} />
      }
    ],
    pediatrics: [
      {
        title: "Child Development",
        description: "Track important milestones in your child's growth and development journey.",
        icon: <ChildIcon />
      },
      {
        title: "Vaccination Schedule",
        description: "Stay on top of your child's immunization schedule with smart reminders.",
        icon: <VaccineIcon />
      },
      {
        title: "Kid-Friendly Content",
        description: "Educational health content designed specifically for children.",
        icon: <EducationIcon featured={true} />
      }
    ],
    cardiology: [
      {
        title: "Heart Rate Tracking",
        description: "Monitor your heart rate and rhythm with our specialized cardiology tools.",
        icon: <HeartIcon />
      },
      {
        title: "Blood Pressure Log",
        description: "Keep track of your blood pressure readings over time to monitor heart health.",
        icon: <BloodPressureIcon />
      },
      {
        title: "Cardiac Exercise Plans",
        description: "Customized exercise plans designed to improve cardiovascular health.",
        icon: <ExerciseIcon featured={true} />
      }
    ],
    psychiatry: [
      {
        title: "Mood Tracking",
        description: "Track your moods and emotions to identify patterns and triggers.",
        icon: <MoodIcon />
      },
      {
        title: "Mindfulness Exercises",
        description: "Access guided meditations and mindfulness exercises for mental wellness.",
        icon: <MindfulnessIcon />
      },
      {
        title: "Therapy Session Manager",
        description: "Schedule and prepare for therapy sessions with integrated tools.",
        icon: <TherapyIcon featured={true} />
      }
    ],
    "general-practice": [
      {
        title: "Appointment Scheduling",
        description: "Easily schedule appointments with your primary care physician.",
        icon: <CalendarIcon />
      },
      {
        title: "Health Records",
        description: "Access your complete health records and medical history in one place.",
        icon: <RecordsIcon />
      },
      {
        title: "Preventive Care",
        description: "Personalized preventive care recommendations based on your health profile.",
        icon: <PreventiveIcon featured={true} />
      }
    ]
  };
  
  // Get features based on current theme
  const currentThemeFeatures = specialtyFeatures[theme as keyof typeof specialtyFeatures] || specialtyFeatures.default;

  return (
    <section className="py-16 px-4">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Specialty Features</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover specialized tools designed specifically for your medical specialty
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentThemeFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              featured={index === 2}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple icon components for the different features
const IconWrapper: React.FC<{ children: React.ReactNode, featured?: boolean }> = ({ children, featured }) => (
  <div className={`flex items-center justify-center ${featured ? 'text-primary-foreground' : 'text-primary'}`}>
    {children}
  </div>
);

const HealthMonitorIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><path d="M9 9h6"/><path d="M9 13v-4"/><path d="M15 13v-4"/><path d="M9 17v-4"/><path d="M12 17v-4"/><path d="M15 17v-4"/></svg>
  </IconWrapper>
);

const MedicationIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 6 4 4"/><path d="M10 16 4 8l8-8 8 8-8 8Z"/><path d="m8 2 12 12"/><path d="m16 16 4.3 4.3c.94.94.94 2.4 0 3.4-.94.94-2.4.94-3.4 0L12 18l4-2Z"/></svg>
  </IconWrapper>
);

const TelemedicineIcon: React.FC<{ featured?: boolean }> = ({ featured }) => (
  <IconWrapper featured={featured}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="12" x="3" y="6" rx="2"/><path d="m15 12-6-4v8z"/></svg>
  </IconWrapper>
);

const ChildIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v5.4h0a7.5 7.5 0 1 0 6 0H15V3"/><path d="M3 9h18"/></svg>
  </IconWrapper>
);

const VaccineIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m17 11 2.09-2.09a1.49 1.49 0 0 0 0-2.12l-1.88-1.88a1.49 1.49 0 0 0-2.12 0L13 7"/><path d="m9 13 6-6"/><path d="M11 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"/><path d="m5 19 7-7"/><path d="m19 5-7 7"/></svg>
  </IconWrapper>
);

const EducationIcon: React.FC<{ featured?: boolean }> = ({ featured }) => (
  <IconWrapper featured={featured}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 19 8-4 8 4"/><path d="m12 3-8 4 8 4 8-4-8-4Z"/><path d="M12 15v4"/></svg>
  </IconWrapper>
);

const HeartIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M7 17.5h4v4"/><path d="M17 8.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
  </IconWrapper>
);

const BloodPressureIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 9h.01"/><circle cx="12" cy="5" r="3"/><path d="M12 8v6"/><circle cx="12" cy="17" r="3"/><path d="M10 2.05C5.094 2.275 2 5.448 2 12s3.094 9.725 8 9.95"/><path d="M14 21.95c4.906-.225 8-3.398 8-9.95S18.906 2.275 14 2.05"/></svg>
  </IconWrapper>
);

const ExerciseIcon: React.FC<{ featured?: boolean }> = ({ featured }) => (
  <IconWrapper featured={featured}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m6 12 2 2 8-8"/></svg>
  </IconWrapper>
);

const MoodIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 17a5 5 0 0 1 5 5"/><path d="M16 17a5 5 0 0 0-5 5"/><circle cx="12" cy="9" r="7"/><polyline points="9 9 9 9.01 9 9"/><polyline points="15 9 15 9.01 15 9"/></svg>
  </IconWrapper>
);

const MindfulnessIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 5.5v9.5"/><path d="m3.5 21 1.4-7h11.2l1.4 7"/><path d="M12 5.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="m7.5 10 2.5-4.5 2.5 4.5"/><path d="M13.75 7.75h-7.5"/></svg>
  </IconWrapper>
);

const TherapyIcon: React.FC<{ featured?: boolean }> = ({ featured }) => (
  <IconWrapper featured={featured}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3h-.4C4 3 2 5 2 8.5V12c0 5 1.5 8.5 6.5 8.5S15 17 15 12V8.5C15 5 13 3 9.4 3H9"/><path d="M5 10.5v.75c0 2.5.75 4.25 3.25 4.25s3.25-1.75 3.25-4.25v-.75"/><path d="M13 18.5h7a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5"/><path d="M20 5.75A2.75 2.75 0 0 0 17.25 3h-1.5"/><path d="M22 9h-7"/></svg>
  </IconWrapper>
);

const CalendarIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
  </IconWrapper>
);

const RecordsIcon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 12a5 5 0 0 1 5-5"/><path d="M7 17a10 10 0 0 1 10-10"/><circle cx="17" cy="12" r="5"/><path d="M19 14.5v-5"/><path d="M16.5 12h5"/></svg>
  </IconWrapper>
);

const PreventiveIcon: React.FC<{ featured?: boolean }> = ({ featured }) => (
  <IconWrapper featured={featured}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 2 16 10L4 22"/></svg>
  </IconWrapper>
);

export default FeatureSection;

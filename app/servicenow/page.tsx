'use client';
import Link from "next/link";
import { useState } from "react";
import { ViewTransition } from "react";



const ServiceNowPage = () => {
  const [currentSection, setCurrentSection] = useState<'modules' | 'certifications'>('modules');
  const modules = [
    {
      id: 1,
      name: 'ITSM',
      description: 'IT Service Management - Streamline IT operations with incident, problem, change, and asset management.',
      icon: '🔧',
    },
    {
      id: 2,
      name: 'CMDB',
      description: 'Configuration Management Database - Maintain accurate inventory of IT assets and their relationships.',
      icon: '📊',
    },
    {
      id: 3,
      name: 'Portal',
      description: 'Service Portal - Self-service platform for employees to request services and track requests.',
      icon: '🌐',
    },
    {
      id: 4,
      name: 'Workspace',
      description: 'Employee Workspace - Unified digital workspace for improved collaboration and productivity.',
      icon: '💼',
    },
    {
      id: 5,
      name: 'CSM',
      description: 'Customer Service Management - Manage customer interactions and support tickets efficiently.',
      icon: '👥',
    },
    {
      id: 6,
      name: 'ITOM',
      description: 'IT Operations Management - Monitor and optimize IT infrastructure and cloud services.',
      icon: '📡',
    }, {
      id: 7,
      name: 'ITAM',
      description: 'IT Asset Management - Track and manage IT assets throughout their lifecycle.',
      icon: '📦',
    }, {
      id: 8,
      name: 'Custom Integrations',
      description: 'Custom integrations with third-party applications and services.',
      icon: '🔌',
    },
    {
      id: 9,
      name: 'AI integration',
      description: 'AI Control Tower',
      icon: '🤖',

    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'Certified System Administrator (CSA)',
      description: 'Validates foundational knowledge of ServiceNow platform and its core features.',
      icon: '🎓',
    },
    {
      id: 2,
      name: 'Certfied Application Developer (CAD)',
      description: 'In progress.',
      icon: '🛠️',
    },
    {
      id: 3,
      name: 'Micro Certification - Playbooks',
      description: 'In progress.',
      icon: '🎯',
    }
  ]

  const Modules = () => {
    return (
      <section id="about" className="py-24 border-t border-zinc-900">
        <p className="text-xs tracking-widest uppercase text-zinc-600 mb-10"><Link href={'/stack'}>←Back</Link> <br />ServiceNow Stack</p>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl tracking-tight mb-6">ServiceNow <br />
            <span className="text-lime-400 italic">Modules</span><span className="text-zinc-700">.</span>
          </h1>
          <p className="text-slate-300 mb-12">Take a look to Modules I've been working with</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-zinc-900 px-4 py-5 flex flex-col items-center gap-2 hover:bg-zinc-800/80 transition-colors group"
              >
                <div className="text-4xl mb-3">{module.icon}</div>
                <h2 className="text-xl group-hover:text-lime-400 transition-colors">{module.name}</h2>
                <p className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    )
  }

  const Certifications = () => {
    return (
      <section className="py-24 border-t border-zinc-900">
          <p className="text-xs tracking-widest uppercase text-zinc-600 mb-10"><button className="cursor-pointer" onClick={() => setCurrentSection('modules')}>←Back</button></p>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl tracking-tight mb-6">ServiceNow <br />
            <span className="text-lime-400 italic">Certifications</span><span className="text-zinc-700">.</span>
          </h1>
          <p className="text-slate-300 mb-12">My current/Upconming certifications</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification) => (
              <div
                key={certification.id}
                className="bg-zinc-900 px-4 py-5 flex flex-col items-center gap-2 hover:bg-zinc-800/80 transition-colors group"
              >
                <div className="text-4xl mb-3">{certification.icon}</div>
                <h2 className="text-xl group-hover:text-lime-400 transition-colors">{certification.name}</h2>
                <p className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">{certification.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <ViewTransition name="dashboard-inner-tab">
        {currentSection === 'modules' && <Modules />}
        {currentSection === 'certifications' && <Certifications />}
      </ViewTransition>
      {currentSection === 'modules' && (
        <div className="flex flex-wrap mb-12">
          <button
            onClick={() => setCurrentSection(currentSection === 'modules' ? 'certifications' : 'modules')}
            className="text-sm bg-lime-400 text-zinc-950 font-semibold px-6 py-3 rounded-md hover:bg-lime-300 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lime-400/20"
          >
            Looking for ServiceNow Certifications? →
          </button>

        </div>
      )}
    </>
  );
};

export default ServiceNowPage;
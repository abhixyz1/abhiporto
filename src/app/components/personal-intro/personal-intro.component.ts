import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

@Component({
  selector: 'app-personal-intro',
  templateUrl: './personal-intro.component.html',
  styleUrl: './personal-intro.component.css'
})
export class PersonalIntroComponent {
  experienceItems: ExperienceItem[] = [
    {
      title: 'Web Developer Intern',
      company: 'Tech Innovators Inc.',
      period: 'Nov 2023 - May 2024',
      responsibilities: [
        'Assisted in developing responsive web applications in a team of 5 developers',
        'Supported the implementation of CI/CD pipelines, contributing to a 40% improvement in deployment efficiency',
        'Participated in designing scalable solutions using Angular and Node.js'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Solusindo.',
      period: 'Aug 2024 - Present',
      responsibilities: [
        'Developed and maintained multiple client websites using React and Express',
        'Optimized database queries, reducing load times by 30%',
        'Collaborated with UX designers to implement intuitive user interfaces'
      ]
    }
  ];

  educationItems: EducationItem[] = [
    {
      degree: 'High School - Mathematics and Science',
      institution: 'SMAN 1 Kertosono',
      year: '2020 - 2023',
      details: [
        'Average Grade: 89.30'
      ]
    },
    {
      degree: 'Bachelor of Applied Science in Information Systems',
      institution: 'Politeknik Negeri Malang',
      year: '2023 - Present',
      details: [
        'Currently enrolled in the D4 Information Systems program',
        'Focused on web development and data analysis',
        'GPA: 3.56'
      ]
    }
  ];

}

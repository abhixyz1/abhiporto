import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {
  technologies = [
    { name: 'Angular', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' },
    { name: 'React', icon: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png' },
    { name: 'Node.js', icon: 'https://logowik.com/content/uploads/images/nodejs.jpg' },
    { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
    { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
    { name: 'Docker', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
    { name: 'AWS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrX7yoCF0oIOFUDibu9uchgeyihc1pRCUOcQ&s' },
    { name: 'Git', icon: 'https://static-00.iconduck.com/assets.00/git-icon-2048x2048-juzdf1l5.png' },
    // Add more technologies as needed
  ];
}

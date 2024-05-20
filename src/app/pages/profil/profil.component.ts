import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../services/keycloak/keycloak.service';
import { UserProfile } from '../../services/keycloak/user-profil';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {

  profilParam: UserProfile = {firstName: '', lastName:''};
  constructor(
    private keycloakService: KeycloakService
  ) {
  }
    ngOnInit(): void {
      const linkColor = document.querySelectorAll('.nav-link');
      linkColor.forEach(link => {
        if (window.location.href.endsWith(link.getAttribute('href') || '')) {
          link.classList.add('active');
        }
        link.addEventListener('click', () => {
          linkColor.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        });
      });
    }

  async logout() {
    await this.keycloakService.logout();
  }
}

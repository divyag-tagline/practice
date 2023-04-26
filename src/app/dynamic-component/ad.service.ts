import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './hero-job-ad/hero-job-ad.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        { name: 'Bombasto', bio: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68' }
      ),
      new AdItem(
        HeroProfileComponent,
        { name: 'Dr. IQ', bio: 'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ' }
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: 'Hiring for several positions', body: 'Submit your resume today!' }
      ),
      new AdItem(
        HeroJobAdComponent,
        { headline: 'Openings in all departments', body: 'Apply today' }
      )
    ];
  }
}

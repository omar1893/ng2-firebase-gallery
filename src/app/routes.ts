import { Routes } from '@angular/router';
import { GalleryComponent } from "./components/gallery/gallery.component";
import { ImageDetailComponent } from "./components/image-detail/image-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { UploadComponent } from "./components/upload/upload.component";
import { AuthenticationGuardService } from './service/authentication-guard.service'

export const appRoutes:Routes = [
    {path:'gallery', component: GalleryComponent, canActivate:[AuthenticationGuardService]},
    {path:'upload', component: UploadComponent, canActivate:[AuthenticationGuardService]},
    {path:'login', component: LoginComponent, canActivate:[AuthenticationGuardService]},
    {path:'', redirectTo:'gallery', pathMatch:'full'},
    {path:'image/:id', component: ImageDetailComponent, canActivate:[AuthenticationGuardService]},
];

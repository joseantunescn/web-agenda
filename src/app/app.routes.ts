import { Routes } from '@angular/router';
import { Autenticar } from './pages/autenticar/autenticar';
import { CriarConta } from './pages/criar-conta/criar-conta';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'autenticar', // Rota para a página de autenticação
        component: Autenticar // Classe do componente
    },
    {
        path: 'criar-conta', // Rota para a página de criação de conta
        component: CriarConta // Classe do componente
    },
    {
        path: 'dashboard', // Rota para a página de dashboard
        component: Dashboard // Classe do componente
    },
    {
        // Rota padrão que redireciona para a página de autenticação
        path: '', pathMatch: 'full', redirectTo: '/autenticar'
    }
];

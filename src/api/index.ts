import axios from "axios";
import { Wallet } from "src/types";

export const nodeApi = axios.create({baseURL: '/api/'});

class AppAPI {
  public requestAccs() {
    return nodeApi.get<Wallet[]>('/myaccounts');
  }
  public requestAccsMock() {
    return new Promise<Wallet[]>((resolve)=>{
      resolve([{address: 'UQAWzu8cdnykvp9INouqS9oqtvrp32bCxuKS6eQrS6ISgZ8t'},{address: 'NMQWzEKcdnykvXfUNouqdS62tvrp32bCxuKS6Ui8weISg9ui'}])
    })
  }
}

export const appAPI = new AppAPI();

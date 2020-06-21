
class AuthService {
    isAuthentificated = false;
    getAuthStatus() {
      return this.isAuthentificated;
    }
    
    login() {
        this.isAuthentificated = true;
      
    }
    logout() {
      this.isAuthentificated = false;
      window.location.href = "/login";
    }
  }
   export const auth = new AuthService();

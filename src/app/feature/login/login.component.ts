import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `
    <div>
      <form class="login-form">
        <span>Email</span>        
        <input type="text" id="email">
        <span>Password</span>
        <input type="password" id="password">
        <button type="submit">Login</button>
      </form>
    </div>
  `,
  styles: `
    div {
      border-radius: 5px;
      background: #f2f2f2;
      padding:20px;
      display:block;
    }
    /* Full-width inputs */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius:3px;
  }

  /* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius:5px;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
  border-radius:5px;
}

span { font-weight:bold }
  `
})
export class LoginComponent {

}

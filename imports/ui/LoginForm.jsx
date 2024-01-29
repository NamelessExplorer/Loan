import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {

  return (
    <form onSubmit={submit} className="signup">
      <div>
        <label htmlFor="username">Username</label>

        <input type="email" name="username" required value={username} />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input type="password" placeholder="*********" name="password" required value={password}  />
      </div>

      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};
import React from 'react'

export default function Appbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Portfolio</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">About me</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact me</a></li>
      </ul>
    </div>
  </nav>
  )
}

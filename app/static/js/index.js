import { createRoot } from 'react-dom/client';

function NavigationBar() {
    // TODO: Actually implement a navigation bar
    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="{{ url_for('home.home') }}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="{{ url_for('about.about') }}">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="dark-mode-icon"><i class="bi bi-moon-fill"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    }

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);
    
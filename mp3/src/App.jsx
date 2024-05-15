import { RouterProvider, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import logo from './assets/logo.svg';

export const githubUserName = 'ChunhBi'
function Root() {
    return(
        <>
            <Header logo={logo} />
            <Routes>
                {/* set '/' to render the default page */}
                <Route path={'/'} element={<Profile userName={githubUserName} />} />
                <Route path={'/projects'} element={<Projects userName={githubUserName} />} />
                <Route
                    path={'/projects/:name'}
                    element={<ProjectDetail userName={githubUserName} />}
                />
            </Routes>
        </>
    );
}
const router = createBrowserRouter(
    [{path:'*', Component: Root}]
)

export default function App() {
  return (
      <div style={{ textAlign: 'center' }}>
          <RouterProvider router={router}/>
      </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { route } from "./routes/";
import { Layout } from "./layouts";
import { useSmoothScroll } from "momentumfx";

export default function App() {
  const [smoothScroll] = useSmoothScroll();
  smoothScroll(0.04, 0.02, 4.5);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            {route.map((r, index) => (
              <Route key={index} path={r.path} element={r.element} />
            ))}
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
}

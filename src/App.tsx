import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import BrandIdentity from './pages/BrandIdentity'
import PackagingDesign from './pages/PackagingDesign'
import GraphicDesign from './pages/GraphicDesign'
import MotionGraphics from './pages/MotionGraphics'
import ProductDesign from './pages/ProductDesign'
import UIUX from './pages/UIUX'
import EazyTaxesBrand from './pages/EazyTaxesBrand'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/brand-identity" element={<BrandIdentity />} />
        <Route path="/case-studies/packaging-design" element={<PackagingDesign />} />
        <Route path="/case-studies/graphic-design" element={<GraphicDesign />} />
        <Route path="/case-studies/motion-graphics" element={<MotionGraphics />} />
        <Route path="/case-studies/product-design" element={<ProductDesign />} />
        <Route path="/case-studies/ui-ux" element={<UIUX />} />
        <Route path="/case-studies/eazytaxes-brand" element={<EazyTaxesBrand />} />
      </Routes>
    </BrowserRouter>
  )
}

import { Route, Routes } from 'react-router-dom'
import { Layout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}

import { Fullscreen, LikeC4Views , isViewId, useViewId } from './likec4'
import { FullscreenDiagramTitle } from '@likec4/diagrams'

export default function App() {
  const [viewId, setViewId] = useViewId({
    initialViewId: 'index',
  })
  const view = LikeC4Views[viewId]
  return (
    <Fullscreen      
      viewId={viewId}
      closeOnEsc={false}
      closeOnOutsideClick={false}
      onNodeClick={({ navigateTo }) => {
        if (isViewId(navigateTo)) {
          setViewId(navigateTo)
        }
      }}
    >
      <FullscreenDiagramTitle>
        {view.title}
      </FullscreenDiagramTitle>
    </Fullscreen>
  )
}
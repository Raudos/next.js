import { loader } from 'webpack'
import loaderUtils from 'loader-utils'
import { NEXT_P_KEY } from '../../../client/consts'

export type ClientPagesLoaderOptions = {
  absolutePagePath: string
  page: string
}

const nextClientPagesLoader: loader.Loader = function() {
  const { absolutePagePath, page }: any = loaderUtils.getOptions(this)
  const stringifiedAbsolutePagePath = JSON.stringify(absolutePagePath)
  const stringifiedPage = JSON.stringify(page)

  return `
    (window[${NEXT_P_KEY}]=window[${NEXT_P_KEY}]||[]).push([${stringifiedPage}, function() {
      var mod = require(${stringifiedAbsolutePagePath})
      if(module.hot) {
        module.hot.accept(${stringifiedAbsolutePagePath}, function() {
          if(!next.router.components[${stringifiedPage}]) return
          var updatedPage = require(${stringifiedAbsolutePagePath})
          next.router.update(${stringifiedPage}, updatedPage)
        })
      }
      return mod
    }]);
  `
}

export default nextClientPagesLoader

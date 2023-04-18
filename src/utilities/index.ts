import { RouteRecordNormalized, useRouter } from "vue-router"
import { NiceRouteName } from "../types"

export function getNiceRouteNames(routes: RouteRecordNormalized[], routeNames?: string[]): NiceRouteName[] {
    const routesWithNiceNames = routes.map(route => {
        const frontmatter: any = route.meta.frontmatter
        return {
            name: route.name as string,
            niceName: frontmatter.name as string ?? route.name as string
        }
    })

    function buildRouteNames(itemName: string): NiceRouteName {
        const route = routesWithNiceNames.find(route => itemName === route.name)
        return {
            name: itemName,
            niceName: route ? route.niceName : itemName
        }
    }

    return routeNames ? routeNames.map(buildRouteNames) : routesWithNiceNames
}

export const springTransition = {
    type: 'spring',
    stiffness: 30,
    damping: 15,
    mass: 2,
}

export function getPagesByRoute(routeStartsWith: string) {
    const router = useRouter()
    return router.getRoutes().filter(route => route.path.startsWith(routeStartsWith)).map(route => {
        const frontmatter: any = route.meta.frontmatter ?? {}
        const title = frontmatter.title ?? ""
        const customerName = frontmatter.customerName ?? ""
        const excerpt = frontmatter.excerpt ?? ""
        const coverImage = frontmatter.coverImage ?? ""
        const tags = frontmatter.tags ?? []
        const icon = frontmatter.icon ?? ""
        return {
            routeName: route.name,
            title,
            customerName,
            excerpt,
            coverImage,
            tags,
            icon,
            path: route.path
        }
    })
}
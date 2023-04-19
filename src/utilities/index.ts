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

interface GetPagesByRouteOptions {
    sort:  "asc" | "desc"
}

export function getPagesByRoute(routeStartsWith: string, options: GetPagesByRouteOptions = { sort: "asc" }) {
    const router = useRouter()
    const pages = router.getRoutes().filter(route => route.path.startsWith(routeStartsWith)).map(route => {
        const frontmatter: any = route.meta.frontmatter ?? {}
        const title = frontmatter.title ?? ""
        const customerName = frontmatter.customerName ?? ""
        const authorName = frontmatter.authorName ?? ""
        const excerpt = frontmatter.excerpt ?? ""
        const coverImage = frontmatter.coverImage ?? ""
        const capability = frontmatter.capability ?? ""
        const tags = frontmatter.tags ?? []
        const icon = frontmatter.icon ?? ""
        return {
            ...frontmatter,
            routeName: route.name,
            title,
            customerName,
            excerpt,
            coverImage,
            capability,
            tags,
            icon,
            path: route.path,
            authorName
        }
    })
    if (options.sort === "asc") return pages.sort((a, b) => (a.path > b.path) ? 1 : -1)
    else return pages.sort((a, b) => (a.path > b.path) ? -1 : 1)
}
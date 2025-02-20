import Articles from "@/assets/articlesList.json";
import {useRoute} from "vue-router";

const getArticleData = () => {
    const route = useRoute()
    let pageName = route.path.replace('/article/','')
    let article = Articles.filter(function(item) { return item.slug === pageName; })
    article = article[0]

    return article
}
export default getArticleData
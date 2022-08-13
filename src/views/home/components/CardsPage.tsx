import ActionRowCard from "../../../react-components/components/cards/ActionRowCard";
import ArticleCard from "../../../react-components/components/cards/ArticleCard";
import MediaImageRowCard from "../../../react-components/components/cards/MediaImageRowCard";
import { Button } from "../../../react-components/components/form/buttons/Button";

export default function CardsPage() {

    return (
        <>
            <h1>Cards</h1>
            <hr />

            <h3>ActionRowCard</h3>

            <ActionRowCard id="id1" label="label1" />
            <ActionRowCard id="id2" label="label2" />
            <br />

            <h3>MediaImageRowCard</h3>

            <MediaImageRowCard
                name="road-1072823_960_720.jpg"
                getImageUrl="https://cdn.pixabay.com/photo/2015/12/01/20/28"
            />
            <MediaImageRowCard
                name="butterflies-1127666_960_720.jpg"
                getImageUrl="https://cdn.pixabay.com/photo/2016/01/08/11/57"
            />
            <br />

            <h3>ArticleCard</h3>
            <ArticleCard
                id="id1"
                name="Name1"
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
                note="Note (Could be date of creation)"
                imageName="road-1072823_960_720.jpg"
                getImageUrl="https://cdn.pixabay.com/photo/2015/12/01/20/28"
            />
            <br />

            <ArticleCard
                id="id2"
                name="Name2"
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
                note="Note (Could be date of creation)"
                imageName="butterflies-1127666_960_720.jpg"
                getImageUrl="https://cdn.pixabay.com/photo/2016/01/08/11/57"
            />
            <br />
        </>
    );
}
import { useState } from "react";
import { Button } from "../../../react-components/components/form/buttons/Button";
import PrimaryCircularProgress from "../../../react-components/components/raw/PrimaryCircularProgress";
import PrimaryLinearProgress from "../../../react-components/components/raw/PrimaryLinearProgress";
import PrimaryPagination from "../../../react-components/components/raw/PrimaryPagination";
import PrimarySlider from "../../../react-components/components/raw/PrimarySlider";

export default function RawPage() {
    const [showCircularProgresses, setShowCircularProgresses] = useState(false)

    const [paginationPage, setPaginationPage] = useState(1)

    const [sliderValue, setSliderValue] = useState(50)
    const [multiSliderValue, setMultiSliderValue] = useState([20, 60])

    return (
        <>
            <h1>Raw</h1>
            <hr />

            <h3>PrimaryCircularProgresses</h3>

            <Button label="Show" onClick={() => setShowCircularProgresses(_ => !_)} />
            {
                showCircularProgresses
                    ? <div>
                        <PrimaryCircularProgress size={80} />
                        <PrimaryCircularProgress />
                        <PrimaryCircularProgress size={160} />
                    </div>
                    : <></>
            }

            <h3>PrimaryLinearProgress</h3>

            <PrimaryLinearProgress value={50} />

            <h3>PrimaryPagination</h3>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <PrimaryPagination page={paginationPage} pagesCount={100} onChange={(page) => setPaginationPage(page)} />
            </div>
            <br />

            <Button label="Set first page" onClick={() => setPaginationPage(1)} />

            <h3>PrimarySlider</h3>

            <PrimarySlider min={0} max={100} value={sliderValue} onChange={(value) => setSliderValue(value as number)} />
            <br />
            <PrimarySlider min={0} max={100} value={multiSliderValue} onChange={(value) => setMultiSliderValue(value as number[])} />
            <br />
            <br />
        </>
    );
}
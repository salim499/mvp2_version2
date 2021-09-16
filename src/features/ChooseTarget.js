// Import from react
import React from 'react'

const ChooseTarget = () => {
    return (
        <>
      <div className={navBarState?"container-with-margin ":"container-without-margin"}>
        <Timeline timelineLevel={timelineLevel}/>
        <div className="start_from_scratch">
            <div className="first_div">
                <div className="first_div-label">
                    Start from scratch
                </div>
                <SelectDndFile
                dndText={dndText}
                selectText={selectText}
                handleUploadFile={handleUploadFile}
                />
            </div>
        </div>
        <div className="start_from_existing_files"> 
        <div className="start_from_existing_files-label">
        Or choose from existing Files
        </div>
        <UserCsvFiles
        datasets={dataSources}
        datasetIcon={select_csv}
        handleChoseDataset={handleChoseDataset}
        />       
        </div>
        <NextPreview 
        handleNext={handleNext}
        nextVisibility={nextVisibility}
        previewVisibility={previewVisibility}
        />
      </div>
      {
      openModal && !cvsOk &&
      <ModalWarning handleHideModal={handleHideModal}/>
      }   
      {
      openModal&& cvsOk &&
      <ModalOk handleHideModal={handleHideModal}
      handleChoseDates={handleChoseDates}/>
      }    
    </>
    )
}

export default ChooseTarget;
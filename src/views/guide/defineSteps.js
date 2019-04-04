const steps = [
    {
        element: '.hamburger',
        popover: {
            title: 'Hamburger',
            description: 'Open && Close sidebar',
            position: 'button'
        }
    },
    {
        element: '.screenfull-icon',
        popover: {
            title: 'Screenfull',
            description: 'Bring the page into fullscreen',
            position: 'left'
        }
    },
    {
        element: '.sizeselect-icon',
        popover: {
            title: 'Sizeselect',
            description: 'Switch the system size',
            position: 'left'
        }
    },
    {
        element: '.international-icon',
        popover: {
            title: 'Switch language',
            description: 'Switch the system language',
            position: 'left'
        }
    },
    {
        element: '.tags-view-container',
        popover: {
            title: 'Tags view',
            description: 'The history of the page you visited',
            position: 'bottom'
        },
        padding: 0
    }
];

export default steps

const { v4: uuidv4 } = require('uuid');

const data = [
  {
    id: uuidv4(),
    title: 'Moderne I',
    year: 2020,
    direction: 'Av. Cnel. Niceto Vega 4640',
    coordinates: [-34.59353675246677, -58.42971569273024],
    rooms: 4,
    status: 'on sale',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    information: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac. Mattis phasellus sed risus id tristique magna semper sit. Scelerisque dolor, tellus quam vel sagittis, vulputate justo duis eu. Gravida pellentesque aliquam viverra accumsan vestibulum egestas at ornare.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac.',
    ],
  },
  {
    id: uuidv4(),
    title: 'Moderne II',
    year: 2018,
    coordinates: [-34.59672146063203, -58.3834573190697],
    direction: 'Marcelo Torcuato de Alvear 1155',
    rooms: 7,
    status: 'sold',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80',
    information: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac. Mattis phasellus sed risus id tristique magna semper sit. Scelerisque dolor, tellus quam vel sagittis, vulputate justo duis eu. Gravida pellentesque aliquam viverra accumsan vestibulum egestas at ornare.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac.',
    ],
  },
  {
    id: uuidv4(),
    title: 'Moderne III',
    year: 2022,
    coordinates: [-34.60041560008247, -58.37231891066929],
    direction: 'Reconquista, C1003 CABA',
    rooms: 4,
    status: 'coming soon',
    img: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
    information: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac. Mattis phasellus sed risus id tristique magna semper sit. Scelerisque dolor, tellus quam vel sagittis, vulputate justo duis eu. Gravida pellentesque aliquam viverra accumsan vestibulum egestas at ornare.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac.',
    ],
  },
  {
    id: uuidv4(),
    title: 'Moderne IV',
    year: 2021,
    coordinates: [-34.598729795669854, -58.431153356846316],
    direction: 'Lavalleja al 2500',
    rooms: 6,
    status: 'on sale',
    img: 'https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    information: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac. Mattis phasellus sed risus id tristique magna semper sit. Scelerisque dolor, tellus quam vel sagittis, vulputate justo duis eu. Gravida pellentesque aliquam viverra accumsan vestibulum egestas at ornare.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac.',
    ],
  },
  {
    id: uuidv4(),
    title: 'Moderne V',
    year: 2020,
    coordinates: [-34.58673582504217, -58.398595165234596],
    direction: 'Laprida 2178',
    rooms: 8,
    status: 'on sale',
    img: 'https://images.unsplash.com/photo-1602075432748-82d264e2b463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    information: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac. Mattis phasellus sed risus id tristique magna semper sit. Scelerisque dolor, tellus quam vel sagittis, vulputate justo duis eu. Gravida pellentesque aliquam viverra accumsan vestibulum egestas at ornare.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A in arcu, gravida accumsan quam et ultricies ipsum. At rhoncus, feugiat vulputate nibh pulvinar molestie tellus. A viverra aenean lacinia netus. Vitae orci praesent volutpat quam amet, nec vitae. Non consequat diam nisl vivamus sed. Vel imperdiet senectus nulla vitae molestie cras congue blandit et. Non id tincidunt hendrerit platea at morbi et. Et mi commodo malesuada metus ac dolor est lectus ac.',
    ],
  },
];

const getPropertiesData = (req, res) => res.json(data);

const getPropertiesImages = (req, res) => {
  res.json([
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: uuidv4(),
      img: 'https://images.unsplash.com/photo-1602075432748-82d264e2b463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ]);
};

const getSinglePropertyData = (req, res) => {
  const paramsId = Number(req.params.id) - 1;
  const singlePropertie = data.filter((obj, index) => index === paramsId);
  res.json(singlePropertie);
};

module.exports = {
  getPropertiesData,
  getPropertiesImages,
  getSinglePropertyData,
};

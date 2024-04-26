import { IArticleContent, IParagraph } from "@/models/Article";
import { variantCheck } from "@/utils/functions";
import { Facebook, LinkedIn, X } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

const LogoButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
}));

const DetailedNewsContent = (props: { content: IArticleContent[][] }) => {
  return (
    <Grid container borderTop={1} paddingY={8}>
      <Grid item xs={12} sm={12} md={2} lg={4} xl={4}>
        <Stack>
          <Typography fontWeight={700}>Share Article</Typography>
          <Stack direction={"row"} spacing={2} marginTop={1}>
            <LogoButton color="primary">
              <LinkedIn />
            </LogoButton>
            <LogoButton color="primary">
              <Facebook />
            </LogoButton>
            <LogoButton color="primary">
              <X />
            </LogoButton>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
        {props.content.map((parentContent, index) => (
          <GeneralContent
            key={index}
            parentContent={parentContent}
            index={index}
          />
        ))}
      </Grid>
    </Grid>
  );
};

const GeneralContent = (props: {
  parentContent: IArticleContent[];
  index: number;
}) => {
  return (
    <Box
      display={"flex"}
      paddingTop={props.index === 0 ? 0 : 6}
      paddingBottom={6}
      borderBottom={1}
    >
      {props.parentContent.length > 0 && (
        <Stack spacing={2} width={"100%"}>
          {props.parentContent[0].type === "image" &&
          props.parentContent.length === 2 ? (
            <ImageAndCaption data={props.parentContent} />
          ) : (
            props.parentContent.map((content, index) =>
              content && content.type === "image" && content.imageUrl ? (
                <ContentImage key={index} imageUrl={content.imageUrl} />
              ) : content.type === "heading" &&
                content.paragraph &&
                content.level ? (
                <ContentHeading
                  headingLevel={content.level}
                  paragraph={content.paragraph}
                />
              ) : content.paragraph && content.paragraph.length > 0 ? (
                <ContentDescription paragraph={content.paragraph} />
              ) : (
                <></>
              )
            )
          )}
        </Stack>
      )}
    </Box>
  );
};

const ImageAndCaption = (props: { data: IArticleContent[] }) => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <img
        src={props.data[0].imageUrl}
        style={{ maxHeight: "700px", objectFit: "scale-down" }}
        alt="Image"
      />
      <Typography marginTop={2}>{props.data[1]!.paragraph![0].text}</Typography>
    </Box>
  );
};

const ContentImage = (props: { imageUrl: string }) => {
  return (
    <img
      src={props.imageUrl}
      style={{ maxHeight: "400px", objectFit: "scale-down" }}
      alt="Image"
    />
  );
};

const ContentHeading = (props: {
  headingLevel: number;
  paragraph: IParagraph[];
}) => {
  const variant = `h${props.headingLevel.toString()}`;
  return (
    <Typography
      variant={variantCheck(variant)}
      fontWeight={props.paragraph[0].bold ? 700 : 500}
    >
      {props.paragraph[0].text}
    </Typography>
  );
};

const ContentDescription = (props: { paragraph: IParagraph[] }) => {
  return (
    <Typography variant="h6" fontWeight={props.paragraph[0].bold ? 700 : 500}>
      {props.paragraph[0].text}
    </Typography>
  );
};

export default DetailedNewsContent;
